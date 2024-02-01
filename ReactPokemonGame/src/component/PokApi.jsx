import { React, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { colors } from "@mui/material";

function PokApi() {
  let [spinner, setSpinner] = useState(false);
  let [length, setLength] = useState("0");
  let [id, setId] = useState();
  let [pokemonDetails, setPokemonDetails] = useState({
    pokId: "",
    pokName: "",
    pokMove: "",
    pokImage: "",
  });
  let [displayContent, setDisplayContent] = useState(false);
  let [pikaId, setPikaId] = useState([]);
  let pikaArray = [];

  let i = 1;
  const handleChange = (event) => {
    let tempId = event.target.value;
    setId(tempId);
    getpokemoneDetails(tempId);
  };

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
    axios
      .get(url)
      .then((res) => {
        console.log(`URL : ${url}`);
        console.log(res.data.results.length);
        setLength(res.data.results.length);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
    if (i <= length) {
      // eslint-disable-next-line
      for (i = 1; i <= length; i++) {
        pikaArray.push(i);
      }
    }
    setPikaId(pikaArray);
    console.log(pikaId);
  }, [length]);

  function getpokemoneDetails(id) {
    setDisplayContent(false);
    setSpinner(true);
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(`URL : ${url}`);
        console.log(res.data);

        setPokemonDetails({
          pokId: id,
          pokName: res.data.forms[0].name,
          pokMove: res.data.moves.length,
          pokImage: res.data.sprites.front_default,
        });
        console.log("pokemonDetails" + JSON.stringify(pokemonDetails));
        setDisplayContent(true);
        setSpinner(false);
        toast("Data Fetch Successfully");
      })
      .catch((error) => {
        console.log(error);
        setSpinner(false);
        setDisplayContent(false);
        toast("Error Fetching data. Try again later");
      });
  }
  return (
    <>
      <div className="" style={{ display: spinner ? "block" : "none" }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="success" />
        </Box>
      </div>
      <div className="container">
        <div className="row mt-5 w100">
          <div className="col-12">
            <h1>
              <span
                style={{
                  color: "#2234ae",
                  backgroundImage:
                    "",
                }}
              >
                Pokemon Game
              </span>
            </h1>
          </div>
          <div className="col-12 mx-auto ">
            <ToastContainer></ToastContainer>
          </div>
        </div>
        <div className="row mt-5 w-100">
          <div className="col-12">
            <h1>Guess Your pokemon Id</h1>
          </div>
          <div className="col-12 w-100">
            <div className="selectDiv">
              <FormControl
                className="mx-auto w-100"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Select Pokemon Id
                </InputLabel>
                <Select
                  defaultValue=""
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={id}
                  label="Select Pokemon Id"
                  onChange={handleChange}
                >
                  {pikaId.map((idValue) => {
                    return <MenuItem value={idValue}>{idValue}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="container mt-5 mx-auto w-50 text-center"
            style={{ display: displayContent ? "block" : "none" }}
          >
            <div className="row ">
              <div className="col-12 ">Pokemon Id: {pokemonDetails.pokId}</div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>
                  {" "}
                  Pokemon Name: <strong>{pokemonDetails.pokName}</strong>
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                Pokemon Moves: {pokemonDetails.pokMove}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="container">
                  <div className="row">
                    <div className="col-12">Pokemon Image:</div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <img
                        style={{ width: "50%", height: "50vh" }}
                        src={pokemonDetails.pokImage}
                        alt="Pokemon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokApi;
