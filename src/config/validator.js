import Validator from 'validatorjs';

Validator.setAttributeFormatter(attribute => attribute.replace(/_/g, ' '));
