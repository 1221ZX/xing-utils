export interface ValidateInterface {
  /**
   * 手机号校验
   */
  mobileCheck(value: string): boolean;

  /**
   * 身份证号校验
   */
  IDCardCheck(value: string): boolean;

  /**
   * 邮箱校验
   */
  emailCheck(value: string): boolean;
}

const Validate: ValidateInterface = {
  mobileCheck: (value: string): boolean => {
    return /^[1][3-9][0-9]{9}$/.test(value);
  },

  IDCardCheck: (value: string): boolean => {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value);
  },

  emailCheck: (value: string): boolean => {
    return /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value);
  },
};

export default Validate;
