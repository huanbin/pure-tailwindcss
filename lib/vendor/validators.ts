import { z } from "zod";
// 定义一个表单的验证模式

//const roleSchema = z.enum(["Admin", "User", "Guest"]);

const phone = z
	.string()
	.regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, { message: "无效的电话号码" }) // 支持国际格式
	.optional(); // 允许为空
// .nonempty({ message: "电话号码为必填项." });
export const vendorSchema = z.object({
	name: z
		.string()
		.nonempty({ message: "名称为必填项." })
		.min(4, { message: "用户名必须至少为4个字符." })
		.max(20, { message: "用户名不能超过20个字符." }),
	taxpayerCode: z.string().nonempty({
		message: "纳税人识别号为必填项.",
	}),
	bankAccount: z.string().nonempty({
		message: "银行账户为必填项.",
	}),
	bankBranch: z
		.string()
		.nonempty({ message: "开户行支行为必填项." })
		.min(4, { message: "开户行支行必须至少为4个字符" }),
	contactEmail: z.string().email({ message: "无效的电子邮箱" }).optional(),
	phoneNumber: phone,
	address: z
		.string()
		.max(255, { message: "地址不能超过255个字符" })
		.optional(),
});

// export const vendorSchemaWithRequiredPhone = vendorSchema.required({
// 	name: true,
// });

export type VendorActionState = {
	success?: string;
	errors?: {
		name?: string[];
		taxpayerCode?: string[];
		bankAccount?: string[];
		bankBranch?: string[];
		address?: string[];
		contactEmail?: string[];
		phoneNumber?: string[];
	};
};
