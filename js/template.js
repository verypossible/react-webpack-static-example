export default function ({ html }) {
  return `
<html lang="en">
  <head><title>HELLO DOLLY!</title></head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <body id="body">
    <div id="outlet">
      ${html}
    </div>
    <script src="index.js"></script>
  </body>
</html>
`
}
