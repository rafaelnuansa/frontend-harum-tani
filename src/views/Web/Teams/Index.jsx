import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import service api
import Api from "../../../services/Api";

//import component alert
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

//import component loading
import Loading from "../../../components/general/Loading";

//import component card team
import CardTeam from "../../../components/general/CardTeam";

export default function Teams() {
  //title page
  document.title = "Teams - Harum Tani";

  //init state
  const [teams, setTeams] = useState([]);
  const [loadingTeam, setLoadingTeam] = useState(true);

  //fetch data teams
  const fetchDataTeams = async () => {
    //setLoadingTeam "true"
    setLoadingTeam(true);

    //fetch data
    await Api.get("/api/public/teams").then((response) => {
      //assign response to state "teams"
      setTeams(response.data.data);

      //setLoadingTeam "false"
      setLoadingTeam(false);
    });
  };

  //hook useEffect
  useEffect(() => {
    //call method "fetchDataTeams"
    fetchDataTeams();
  }, []);

  return (
    <LayoutWeb>
      <div className="container mt-4 mb-3">
        <div classname="row">
          <div className="col-md-12">
            <h5 className="text-uppercase">
              <i className="fa fa-user-circle"></i> Kelompok Tani
            </h5>
            <hr />
          </div>
        </div>
        <div className="row mt-4">
          {loadingTeam ? (
            <Loading />
          ) : teams.length > 0 ? (
            teams.map((team) => (
              <CardTeam
                key={team.id}
                name={team.name}
                image={team.image}
                role={team.role}
              />
            ))
          ) : (
            <AlertDataEmpty />
          )}
        </div>
      </div>
    </LayoutWeb>
  );
}
