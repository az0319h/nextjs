"use client";

import InputField from "@/components/ui/InputField";
import PasswordField from "@/components/ui/PasswordField";
import Search from "@/components/ui/Search";
import { useEffect, useState } from "react";

export default function ExampleFormPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Search
  const [keyword, setKeyword] = useState("");

  // Search 간단 예시
  useEffect(() => {
    // fetch 데이터 연결해서 하기(아래는 예시입니다.)
    // const { data } = await getArticles(keyword ? { word: keyword } : {});
  }, [keyword]);

  const MAX_NAME_LENGTH = 30;

  // 이메일 유효성 검사
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "이메일을 입력해 주세요.";
    if (!emailRegex.test(value)) return "이메일 형식이 아닙니다.";
    return "";
  };

  // 핸들러
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length > MAX_NAME_LENGTH) {
      setNameError(
        `포토카드 이름은 최대 ${MAX_NAME_LENGTH}자까지 입력 가능합니다.`
      );
    } else {
      setNameError("");
    }
  };

  // 비밀번호 부분은 회원가입을 기준으로 구현했습니다
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("비밀번호를 입력해 주세요");
    } else if (value.length < 8) {
      setPasswordError("8자 이상 입력해 주세요");
    } else {
      setPasswordError("");
    }

    // 비밀번호 확인까지 작성했다가 또 다시 비밀번호를 바꿀 경우, 즉시 에러
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      <InputField
        label="이메일"
        placeholder="이메일을 입력해 주세요"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        labelClassName="text-sm font-medium"
        error={emailError}
      />

      <InputField
        label="포토카드 이름"
        placeholder="포토카드 이름을 입력해 주세요"
        name="photocardName"
        value={name}
        onChange={handleNameChange}
        labelClassName="text-base font-bold"
        error={nameError}
      />

      <PasswordField
        label="비밀번호"
        placeholder="8자 이상 입력해 주세요"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />

      <PasswordField
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={confirmPasswordError}
      />

      <Search onSearch={setKeyword} />
    </div>
  );
}
