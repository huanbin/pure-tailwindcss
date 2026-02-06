"use server";

import { redirect } from "next/navigation";
import { prisma } from "../prisma";
import { VendorActionState, vendorSchema } from "./validators";

export async function createVendor(
    prevState: VendorActionState,
    formData: FormData,
): Promise<VendorActionState> {
    const vendor = Object.fromEntries(formData.entries());
    console.log(`vendor=${JSON.stringify(vendor)}`);
    //parse vs safeParse
    const validatedVendorDatas = vendorSchema.safeParse(vendor);
    console.log(`validatedVendorDatas=${JSON.stringify(validatedVendorDatas)}`);
    if (!validatedVendorDatas.success) {
        const formFieldErrors = validatedVendorDatas.error.flatten().fieldErrors;
        return {
            errors: { ...formFieldErrors },
        };
    } else {
        await prisma.customers.create({
            data: { ...validatedVendorDatas.data },
        });
        redirect("/vendor");
        return {
            success: "验证成功",
        };
    }
}
