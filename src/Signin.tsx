import { useState } from "react";
import BannerSignin from "./BannerSignin";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Valider brugerinput og udfør login-logik
    navigate("/forside"); // Naviger til forsiden
  };

  return (
    <div className="bg-[#222F45]">
      <div className="flex justify-between items-start">
        <div className="w-auto h-auto rounded">
          <img src="logo.png" alt="Venstre billede" />
        </div>
        <div className="w-auto h-auto rounded">
          <div className="text-right text-2xl bg-[#222F45] text-white p-1">
            Mandag 14/5/2024 <br />
            <div className="text-8xl">Kl. 12:00</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[#222F45]">
        <BannerSignin />
        <form
          className="bg-white shadow-md rounded-lg p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center mb-4">Log ind</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-2 py-2"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Adgangskode</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-2 py-2"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Log ind
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
