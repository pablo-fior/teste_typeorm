import * as yup from 'yup';

yup.setLocale({
    mixed: {
        required: '${path} é um campo obrigatório',
        oneOf: '${path} deve ser um dos seguintes valores [${values}]',
    },
    string: {
        email: '${path} deve ser um email válido',
        min: '${path} deve ter no mínimo ${min} caracteres',
        max: '${path} deve ter no máximo ${max} caracteres',
        matches: '${path} deve ser igual a ${regex}',
        length: '${path} deve ter exatamente ${length} caracteres',
    }
});

export default yup;