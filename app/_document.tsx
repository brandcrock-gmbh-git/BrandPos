// // app/_document.tsx

// import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// interface MyDocumentProps {
//   detectedRegion: string;
// }

// export default class MyDocument extends Document<MyDocumentProps> {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);

//     // Get the detected region from headers
//     const detectedRegion = ctx.req.headers['x-detected-region'] || 'default';

//     return {
//       ...initialProps,
//       detectedRegion,
//     };
//   }

//   render() {
//     const { detectedRegion } = this.props;

//     return (
//       <Html className={`region-${detectedRegion.toLowerCase()}`}>
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
