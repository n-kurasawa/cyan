defmodule Api.MailService do
  use Mailgun.Client, domain: Application.get_env(:api, Api.Endpoint)[:mailgun_domain],
                      key: Application.get_env(:api, Api.Endpoint)[:mailgun_key]

  @from "info@cyan.com"

  def send_invite_email(toEmail, fromUser) do
    send_email to: toEmail,
               from: @from,
               subject: "【Cyan】#{fromUser.name}さんから招待されました",
               text: """
               勉強会管理サービス Cyan に #{fromUser.name} さんから招待されました。

               下記URLより会員登録してください。
               ※登録時にはこのメールが届いたメールアドレスを使用してください。

               http://192.168.33.10/signup

               """
  end
end
