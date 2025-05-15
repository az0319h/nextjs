import RandomPoint from "@/components/RandomPoint";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      HomePage
      <Link href="/signup">
        <div>Input컴포넌트 확인용 페이지 클릭</div>
      </Link>
      배포 확인(배포에 문제가 있는 확인)
      제발DEV야 좀 .....
      <RandomPoint />
    </div>
  );
}
