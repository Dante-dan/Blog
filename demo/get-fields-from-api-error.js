/**
 * 解析 axios 发出的请求中返回的错误，若是响应错误，则输出可供 Form 组件使用的表单字段对象
 * @param {Object} errorFromAxios - 来自 axios 请求的 Error 实例
 * @param {Object} fieldValues - antd 中 Form 组件的 fieldValues，key 为表单字段的名称
 */
export default function getFieldsFromApiError(errorFromAxios, fieldValues) {
  const fieldsWithErrors = {};

  if (errorFromAxios && errorFromAxios.response && errorFromAxios.response.data) {
    const errorInfoFromServer = errorFromAxios.response.data;

    const fieldNames = Object.keys(fieldValues);
    const fieldNamesFromServer = Object.keys(errorInfoFromServer);

    const namesOfFieldsHasErrors = fieldNamesFromServer.filter(name => fieldNames.includes(name));

    namesOfFieldsHasErrors.forEach((name) => {
      let fieldErrors = [];
      const fieldErrorFromServer = errorInfoFromServer[name];

      if (Array.isArray(fieldErrorFromServer)) {
        fieldErrors = fieldErrorFromServer.map(
          value => typeof value === 'string' && new Error(`${value}`),
        );
      } else if (typeof fieldErrorFromServer === 'string') {
        fieldErrors = [new Error(fieldErrorFromServer)];
      }

      fieldsWithErrors[name] = {
        value: fieldValues[name] || null,
        errors: fieldErrors,
      };
    });
  }

  return fieldsWithErrors;
}
