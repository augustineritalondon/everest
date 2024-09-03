export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);

    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: data?.email,
      phone: data?.phone,
      specifics: data?.specifics,
    });

    let response = await fetch(
      "http://dashboard.everestmobility.co/api/users/request-account-deletion/",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let res = await response.json();

    return Response.json(res);
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
