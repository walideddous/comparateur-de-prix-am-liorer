import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
//material UI
import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Button from "@material-ui/core/Button";
//Redux
import { connect } from "react-redux";
import { getAllUsers, deleteUser } from "../../../actions/admin";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  divStyle: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px"
  },
  buttonStyle: {
    backgroundColor: "rgb(255, 51, 102)",
    color: "white"
  },
  divDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px"
  }
}));

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const Utilisateurs = ({ getAllUsers, users, deleteUser, user }) => {
  const classes = useStyles();
  const state = {
    columns: [
      { field: "nom", title: "Nom" },
      { field: "prenom", title: "Prenom" },
      { field: "email", title: "Email" },
      { field: "status", title: "Status" }
    ]
  };

  const handlClick = e => {
    getAllUsers();
  };

  return (
    <Fragment>
      <div className={classes.toolbar} />
      <div className={classes.divStyle}>
        <h1>Afficher tous les membres du site</h1>
        <Button
          variant='contained'
          className={classes.buttonStyle}
          onClick={e => handlClick(e)}
        >
          Afficher
        </Button>
      </div>

      <Fragment>
        <MaterialTable
          options={{
            exportButton: true
          }}
          icons={tableIcons}
          title='Utilisateurs'
          columns={state.columns}
          data={users.filter(use => use._id !== user._id)}
          editable={{
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  deleteUser(oldData._id);
                }, 600);
              })
          }}
          detailPanel={users => {
            if (users.status === "Agence")
              return (
                <div className={classes.divDetails}>
                  <h6>
                    <strong>Nom de l'agence :</strong>
                    {users.nomAgence}
                  </h6>
                  <h6>
                    <strong>Numero d'identifiant de l'agence :</strong>
                    {users.numLegalAgence}
                  </h6>
                  <h6>
                    <strong>Numero de telephone de l'agence :</strong>
                    {users.telephone}
                  </h6>
                </div>
              );
          }}
        />
      </Fragment>
    </Fragment>
  );
};

Utilisateurs.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.auth.users,
  user: state.auth.user
});

export default connect(mapStateToProps, { getAllUsers, deleteUser })(
  Utilisateurs
);
