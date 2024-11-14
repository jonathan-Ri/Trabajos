import Product from "../models/Formulario.js";
import { transporter } from '../config/mailer.js';
import PDFDocument from 'pdfkit';
import path from 'path';
import fs from 'fs';

export const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body);

    try {
        // Guardar el formulario en la base de datos
        const savedProduct = await newProduct.save();

        // Crear el PDF con las respuestas del formulario
        const doc = new PDFDocument();
        const pdfPath = path.resolve(`./temp/formulario_respuestas_${Date.now()}.pdf`);
        doc.pipe(fs.createWriteStream(pdfPath));

        // Agregar contenido al PDF
        doc.fontSize(14).text('\n \n \n Comprobante de reclamo', { align: 'center' });
        doc.moveDown();
       // Convierte la fecha a un formato legible
        const fecha = new Date(savedProduct.createdAt).toLocaleDateString('es-CL', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        // Crea el texto del PDF
        // Crear el texto
        doc.fontSize(12) // Tamaño de fuente normal
        .text(`Su `,{ continued: true }) // Texto normal
        .font('Helvetica-Bold').fontSize(14) // Cambiar a negrita
        .text(`${req.body.tipoSolicitud} `,{ continued: true }) // Texto en negrita
        .font('Helvetica').fontSize(12) // Volver a la fuente normal
        .text(`fue registrada de manera exitosa en el Sistema OIRS con fecha ${fecha} y se ha generado este comprobante de registro de su trámite.`,{ continued: true });
                // Agrega el texto al PDF
        doc.moveDown();
   
        const texto_codigo = `\nSu código de atención es: ${savedProduct._id} \n`;

        doc.fontSize(12).text(texto_codigo);

        const texto_solicitante = `\nSolicitante (Persona ${req.body.tipoSolicitante})`;

        doc.fontSize(12).text(texto_solicitante);
        doc.moveDown();

        // Configura tu documento PDF
        doc.fontSize(12).text('Nombre:', { continued: true }).text(req.body.nombre);
        doc.moveDown(); // Mueve hacia abajo antes de la siguiente línea

        doc.text('RUT:', { continued: true }).text(req.body.rut);
        doc.moveDown();

        doc.text('Teléfono:', { continued: true }).text(req.body.telefonoContacto);
        doc.moveDown();

        doc.text('Email:', { continued: true }).text(req.body.email);
        doc.moveDown();

        doc.text('Dirección:', { continued: true }).text(req.body.direccion || 'No registrada');
        doc.moveDown();

        doc.text('Institución:', { continued: true }).text(req.body.institucion);
        doc.moveDown();

        doc.text('Área:', { continued: true }).text(req.body.area);
        doc.moveDown();

        doc.text('Tema:', { continued: true }).text(req.body.tema);
        doc.moveDown(); // Deja un espacio antes de finalizar

        doc.text('\nDescripción: \n').text(req.body.detalles);
        doc.moveDown(); // Deja un espacio antes de finalizar

        console.log('PDF Path:', pdfPath);


        // Agregar logo de la institución en la esquina superior izquierda con un margen
        const logoPath = path.resolve('./uploads/MINSAL-2.png'); // Ruta a la imagen del logo
        doc.image(logoPath, 50, 50, { width: 80 }) // Posiciona el logo en (50, 50) con un ancho de 80px
        .moveDown();


          // Mensaje final 
          const poemLines = [
            "\n",
            "TODA PERSONA PODRÁ RECLAMAR SUS DERECHOS ANTE EL CONSULTORIO, HOSPITAL O CENTRO",
            "MÉDICO",
            "PRIVADO QUE LO ATIENDE, SI LA RESPUESTA NO ES SATISFACTORIA PODRÁ RECURRIR A LA",
            "SUPERINTENDENCIA DE SALUD. (Extracto de la Ley No 20.584 de Derechos y Deberes de los Pacientes)",
            "\n",
            "Para conocer el estado de su trámite ingrese en nuestro sitio OIRS, al link Atención ciudadana, e",
            "ingrese el código de atención y su RUT"
        ];
        // Dibujar línea horizontal
        doc.moveTo(50, doc.y) // Iniciar la línea en la posición actual de `y`
        .lineTo(550, doc.y) // Dibujar hasta el final de la página
        .stroke();
        // Establecer el tamaño de fuente y centrado para cada línea
        doc.fontSize(10);
        poemLines.forEach(line => {
            doc.text(line, { align: 'center' });
        });
        doc.end();

        // Enviar el correo con el PDF adjunto una vez que se genere
        try {
            await transporter.sendMail({
                from: '"💋 RedSaludPopular 💋" <d.aliaga2007@gmail.com>', // Dirección del remitente
                to: req.body.email, // Dirección del destinatario
                subject: "Nuevo mensaje de RedSalud", // Asunto del correo
                html: "<b>Se ha enviado el formulario correctamente</b>", // Cuerpo del correo en HTML
                attachments: [
                    {
                        filename: 'formulario_respuestas.pdf',
                        path: pdfPath,
                        contentType: 'application/pdf'
                    },
                ],
            });

            // Eliminar el archivo PDF después de enviar el correo
            fs.unlink(pdfPath, (err) => {
                if (err) console.error('Error deleting PDF:', err);
            });

            // Responder con éxito al cliente
            res.status(200).json(savedProduct);
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            res.status(500).json({ message: 'Error sending email' });
        }
    } catch (err) {
        next(err);
    }
};


export const updateProduct = async (req, res, next) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body})
        res.status(200).json(updatedProduct)
    }catch(err){
        next(err)
    }
};

export const deleteProduct = async (req, res, next) => {
     
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")
    }catch(err){
        next(err)
    }
};

export const getProduct = async (req, res, next) => {
     
    try{
        const obtainedProduct = await Product.findById(req.params.id)
        res.status(200).json(obtainedProduct)
    }catch(err){
        next(err)
    }
};

export const getAllProduct = async (req, res, next) => {
     
    try{
        const obtainedProduct = await Product.find()
        res.status(200).json(obtainedProduct)
    }catch(err){
        next(err)
    }
};
