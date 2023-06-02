import React from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "../checkbox";
import { Input } from "../components/input";
import { Label } from "../components/label";
import ContributionSummury from "../modules/payment/ContributionSummury";
import Payment from "../modules/payment/Payment";
import { Dropdown } from "../components/dropdown";
import FromRow from "../components/common/FromRow";
import FromGroup from "../components/common/FromGroup";

const ShippingPage = () => {
    const { control } = useForm();
    return (
        <div className="flex items-start w-full gap-x-[74px]">
            <div className="flex-1">
                <h2 className="font-bold text-[30px] leading-normal mb-10">
                    Shipping Address
                </h2>
                <FromRow>
                    <FromGroup>
                        <Label>First Name *</Label>
                        <Input
                            control={control}
                            name="first_name"
                            placeholder="John"
                        ></Input>
                    </FromGroup>
                    <FromGroup>
                        <Label>Last Name *</Label>
                        <Input
                            control={control}
                            name="last_name"
                            placeholder="Doe"
                        ></Input>
                    </FromGroup>
                </FromRow>
                <FromGroup>
                    <Label>Country *</Label>
                    <Dropdown>
                        <Dropdown.Select placeholder="Select country"></Dropdown.Select>
                        <Dropdown.List></Dropdown.List>
                    </Dropdown>
                </FromGroup>
                <FromRow>
                    <FromGroup>
                        <Label>Street Address *</Label>
                        <Input
                            control={control}
                            name="address"
                            placeholder="John"
                        ></Input>
                    </FromGroup>
                    <FromGroup>
                        <Label>City *</Label>
                        <Input
                            control={control}
                            name="city"
                            placeholder="Doe"
                        ></Input>
                    </FromGroup>
                </FromRow>
                <FromRow>
                    <FromGroup>
                        <Label>Postal Code *</Label>
                        <Input
                            control={control}
                            name="code"
                            placeholder="123456"
                        ></Input>
                    </FromGroup>
                    <FromGroup>
                        <Label>Phone Number *</Label>
                        <Input
                            control={control}
                            name="phone"
                            placeholder="+123 456 789"
                        ></Input>
                    </FromGroup>
                </FromRow>
                <div className="flex items-center gap-x-5 mb-11">
                    <Checkbox>Remember this address for next time use</Checkbox>
                </div>
                <h2 className="font-bold text-[30px] leading-normal mb-10">
                    Payment
                </h2>
                <Payment></Payment>
            </div>
            <div className="flex-1 max-w-[462px] ml-auto">
                <ContributionSummury></ContributionSummury>
            </div>
        </div>
    );
};

export default ShippingPage;
