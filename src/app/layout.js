import "./globals.css";
import "./../components/styles/index.css";

export const metadata = {
  title: "최애의 포토",
  description: "사진을 만들고 공유할 수 있는 커뮤니티입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-auto min-h-screen w-full sm:max-w-[375px] md:max-w-[744px] lg:max-w-[1920px]">
          {children}
        </main>
      </body>
    </html>
  );
}
