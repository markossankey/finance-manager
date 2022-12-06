import express, { RequestHandler } from "express";
// TODO: add OAuth2Client and checks https://developers.google.com/identity/gsi/web/guides/verify-google-id-token#using-a-google-api-client-library
const router = express.Router();

const verifyIsProvidedByGoogle: RequestHandler = (req, res, next) => {
  const { body, cookies } = req;
  if (!cookies || !cookies.g_csrf_token) {
    res.status(400).json({ message: "A g_csrf_token is a required cookie" });
  }
  if (!body.g_csrf_token) {
    res.status(400).json({ message: "A g_csrf_token is required in the body" });
  }
  if (body.g_csrf_token !== cookies.g_csrf_token) {
    res.status(400).json({
      message:
        "The required g_csrf_tokens in the body and cookies do not match",
    });
  }
  next();
};

router.post("/", verifyIsProvidedByGoogle, (req, res) => {
  const { body, headers, cookies } = req;
  res.send(
    `
    <h3>body</h3>
    <pre>${JSON.stringify(body, null, 4)}</pre>
    <br/><br/>
    <h3>headers</h3>
    <pre>${JSON.stringify(headers, null, 4)}</pre>
    <br/><br/>
    <h3>cookies</h3>
    <pre>${JSON.stringify(cookies, null, 4)}</pre>
    `
  );
});

export default router;
