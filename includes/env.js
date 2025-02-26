/**
 * Take a variable and environment and replace <env> with environment
 * @param {string} variable a variable tha needs environment replacement
 * @param {string} env either dev/ppd/prd
 * @returns environment replaced variable
 */
function replaceEnv(variable, env) {
    // Check if the variable contains the <env> placeholder
    if (variable.includes("<env>")) {
        return variable.replace("<env>", env);
    }
    return variable;
}

module.exports = {
    replaceEnv,
};
