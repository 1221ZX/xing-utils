interface ValidateInterface {
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
declare const Validate: ValidateInterface;

export { Validate as Format };
