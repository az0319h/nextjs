"use client";
import CardListPageEx from "@/components/FllterDropdown/CardListPageEx";
import { Suspense } from "react"; //useSearchParams를 사용해서 Suspense로 감싸야 안전하게 CSR 처리가 됩니다.

import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      HomePage
      <Suspense fallback={null}>
        <CardListPageEx />
      </Suspense>
      <Link href="/signup">
        <div>Input컴포넌트 확인용 페이지 클릭</div>
      </Link>
      배포 확인(배포에 문제가 있는 확인)
    </div>
  );
}
