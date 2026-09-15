

const { Resend } = require("resend");


const resend = new Resend(process.env.RESEND_API_KEy)

export async function POST(request) {
    try {
        const { name, email, message } = await request.json()

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Please fill in all fields.' }, { status: 400 }
            )
        }
        await resend.emails.send({
            from: 'Portfolio<onboarding@resend.dev>',
            to: 'yasamanmirzaei1997@gmail.com',
            subject: `New message from ${name}`,
            replyTo: email,
            text: `
             Name: ${name},
             Email: ${email},
             Message: ${message}
            `
        })
        return Response.json(
            { message: 'Message sent successfully!' }, { status: 200 }
        )
    } catch (error) {
        console.log(error);
        return Response.json(
            { error: 'something went wrong.' }, { status: 500 }
        )
    }
}