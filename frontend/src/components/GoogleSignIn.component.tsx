export const GoogleSignIn = () => {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="344499527478-cj4jgqncs8n4i71rcas8c6o89pi272qj.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:8000/api/login"
        data-auto_prompt="false"
      ></div>
      <div
        style={{ backgroundColor: "black" }}
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
};
