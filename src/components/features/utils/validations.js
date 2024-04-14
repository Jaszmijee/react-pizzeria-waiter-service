export const isValidNumericInput = (value) => {
    return !isNaN(value) || value === '' || value === '.';
};

export const isStatusBusy = (value) => {
   return  (value === 'Busy');
    };

export const isTableTooSmall = (value, max) => {
    const presentCount = parseInt(value);
    const maxAllowed = parseInt(max);

    return presentCount > maxAllowed;
};
