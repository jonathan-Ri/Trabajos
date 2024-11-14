    import mongoose from 'mongoose';
    const { Schema } = mongoose;

    const FormularioSchema = new Schema({
        tipoSolicitante: {
            type: String,
            enum: ['individual', 'juridica'], // Tipo de solicitante: individual o organización
            required: false,
            description: 'Tipo de solicitante, puede ser una persona individual o una organización.'
        },
        nacionalidad: {
            type: String,
            enum: ['Chilena', 'Extranjera'], // Nacionalidad: chilena o extranjera
            required: false,
            description: 'Nacionalidad del solicitante, debe ser chilena o extranjera.'
        },
        prais: {
            type: Boolean,
            default: false,
            description: 'Indica si el solicitante es beneficiario del Programa de Apoyo a la Inclusión Social (PAIS).'
        },
        rut: {
            type: String,
            required: false,
            description: 'Rol Único Tributario (RUT) del solicitante, debe ser único en la base de datos.'
        },
        nombre: {
            type: String,
            required: false,
            description: 'Nombre del solicitante.'
        },
        apellidoPaterno: {
            type: String,
            required: false,
            description: 'Apellido paterno del solicitante.'
        },
        apellidoMaterno: {
            type: String,
            required: false,
            description: 'Apellido materno del solicitante.'
        },
        fechaNacimiento: {
            type: Date,
            required: false,
            description: 'Fecha de nacimiento del solicitante.'
        },
        sexo: {
            type: String,
            enum: ['Masculino', 'Femenino', 'No binario', 'Otro'], // Género del solicitante
            required: false,
            description: 'Sexo del solicitante.'
        },
        puebloIndigena: {
            type: String,
            description: 'Pueblo indígena al que pertenece el solicitante, si aplica.'
        },
        telefonoContacto: {
            type: String,
            required: false,
            description: 'Teléfono de contacto, puede ser fijo, móvil o laboral.'
        },
        telefonoSecundario: {
            type: String,
            description: 'Teléfono secundario de contacto, puede ser fijo, móvil o laboral.'
        },
        tipoSolicitud: {
            type: String,
            required: false,
            description: 'Tipo de solicitud que se está realizando.'
        },
        region: {
            type: String,
            required: false,
            description: 'Región donde reside el solicitante.'
        },
        comuna: {
            type: String,
            required: false,
            description: 'Comuna donde reside el solicitante.'
        },
        institucion: {
            type: String,
            description: 'Institución a la que se dirige la solicitud, si aplica.'
        },
        area: {
            type: String,
            description: 'Área específica relacionada con la solicitud.'
        },
        fechaEvento: {
            type: Date,
            description: 'Fecha del evento que informa la solicitud.'
        },
        detalles: {
            type: String,
            description: 'Detalles adicionales sobre la solicitud.'
        },
        observaciones: {
            type: String,
            description: 'Observaciones sobre la solicitud.'
        },
        adjunto: {
            type: String, // Cambia esto a un array de strings
            description: 'URL del archivo adjunto relacionado con la solicitud.'
        },
        email: {
            type: String,
            description: 'email del solicitante'
        },
        descripcionAdjunto: {
            type: String,
            description: 'Descripción del archivo adjunto.'
        }
    }, { timestamps: false });

    export default mongoose.model("Formulario", FormularioSchema);
