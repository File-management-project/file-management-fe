"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "../../components/common/Button";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/common/Input";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="w-screent h-screen flex flex-col justify-center items-center">
      <div className="w-[408px] h-[532px] flex flex-col items-center rounded-lg shadow-[0px_2px_10px_0px_#0000001A] py-8 px-6">
        <Image
          src="/images/logo.png"
          alt="app logo"
          width={100}
          height={100}
        ></Image>
        <h1 className="text-[#084C2E] text-center px-8 font-bold text-displaySm mt-2">
          Phần mềm quản lý kho tài liệu
        </h1>
        <form className="relative">
          <div className="w-[360px] mt-8 flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="label-text text-sm">Tài Khoản</div>
              <Controller
                name="admin"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="admin"
                    customClassNames="w-full"
                    customInputClassNames="text-sm"
                    clearable
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="label-text text-sm">Mật khẩu</div>
              <Controller
                name="password"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    type="password"
                    placeholder="Password"
                    value={value}
                    onChange={onChange}
                    customClassNames="w-full"
                    customInputClassNames="text-sm"
                    clearable
                  />
                )}
              />
            </div>

            <div className="flex w-full justify-between text-xs -mt-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="checkbox border-gray-300 rounded-md w-4 h-4"
                />
                <div className=" text-gray-600 font-normal">
                  Lưu thông tin đăng nhập
                </div>
              </div>

              {/* <div className=" text-lightBlue-700 font-medium cursor-pointer" onClick={() => router.push('/forgot-password')}>
              Forgot password?
            </div> */}
            </div>
            <Button
              onClick={() => router.push("/category-management/position")}
              className="text-Sm mt-5 !text-gray-0 bg-blue-25"
            >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
