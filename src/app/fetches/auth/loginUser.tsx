import toast from "react-hot-toast";

export default async function loginUSer(data: {
  email: string;
  password: string;
}) {
  const res = await fetch("http://localhost:8000/api/v1/login", {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  const dt = await res.json();

  if (dt.success === false) {
    toast.error(dt?.msg);
  }
  if (dt.success === true) {
    toast.success(dt?.msg);
  }

  return dt;
}
