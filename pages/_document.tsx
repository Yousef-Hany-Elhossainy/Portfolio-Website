import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/> 
        <meta
          name="description"
          content="Software/Web Developer/Mechanical Engineer looking for a job"
          />
        <meta
          name="keywords"
          content="Software/Web Developer, Mechanical Engineer,React Developer,Game Developer"
          />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-purple-900 to-blue-900 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
