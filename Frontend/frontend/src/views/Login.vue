const handleLogin = async () => {
  try {
    const res = await login({
      email: email.value,
      password: password.value
    });

    localStorage.setItem("token", res.data.token);

    router.push("/dashboard");
  } catch (error) {
    alert("Email ou senha inválidos ❌");
  }
};