import { Locale } from '@/i18n.config';

export default async function NestedCategoryLayout(props: {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
  }>;
}) {
  return <>{props.children}</>;
}

// export type LayoutProps = {
//   children: ReactNode;
//   params: Promise<{
//     lang: Locale; // 'en' | 'ru'
//   }>;
// };

// export async function generateStaticParams() {
//   return [{ lang: 'en' }, { lang: 'ru' }];
// }

// export default async function Layout({ children, params }: LayoutProps) {
//   const { lang } = await params;

//   const { common, information } = await getDictionary(lang);
//   const { header, footer } = common;

//   return (
//     <html lang={lang}>
//       <body
//         className={`${montserrat.variable} ${raleway.variable} grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] smOnly:pt-[82px]`}
//       >
//         <Header data={header} />
//         <main>{children}</main>
//         <Footer footer={footer} information={information} />
//         <div id="modal" />
//       </body>
//     </html>
//   );
// }
