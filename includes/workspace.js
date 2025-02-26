/**
 * For the output parquet files if in a workspace then add a workspace suffix
 * @returns {string} the output suffix if required
 */
function workspaceOutput() {
    if (dataform.projectConfig.schemaSuffix === '') {
        return ``
    }
    else {
        return `-${dataform.projectConfig.schemaSuffix}`
    }
}

module.exports = {
    workspaceOutput,
};