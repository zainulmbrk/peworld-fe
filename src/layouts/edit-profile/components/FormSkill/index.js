import React from "react";
import styles from "./FormSkill.module.scss";

const FormSkill = (dataskill) => {
  const resultskill = dataskill.data.data.data.dataskill.data;
  const handleEdit = (prevData) => {
    // setFormEditData({
    //   ...prevData,
    //   releaseDate: moment(prevData.releaseDate).format("YYYY-MM-DD"),
    // });
  };

  return (
    <>
      <div className={styles.cardFormSkill}>
        <div className={styles.title}>
          <p>Skill</p>
        </div>

        <div className={styles.horizontalLine}>
          <div className={styles.hline}></div>
        </div>
        <form>
          <div className={styles.companyForm}>
            <input type="text" placeholder="Masukan skill" />
          </div>
          <div className="col d-flex flex-wrap justify-content-betweem ">
            {resultskill?.map((item) => {
              return (
                <>
                  <a className=" btn btn-light me-1 mb-2 col-sm-12 col-md-5 d-flex ">
                    <div className="col-12 d-flex">
                      <div className="col-6 pt-2">{item.skill_name}</div>
                      <div className="col-6 d-flex text-danger skill-edit">
                        <button className="btn btn-outline-success me-2 skill col-6" >
                          Edit
                        </button>
                        <button className="btn btn-outline-danger skill col-6">
                          Delete
                        </button>
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
          <div className={styles.btnSaveSkill}>
            <button>Simpan</button>
          </div>
        </form>
      </div>

      {/* <div
        className="modal fade"
        id="editSkill"
        tabIndex="-1"
        aria-labelledby="editSkillLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editSkillLabel">
                Edit Skill
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => handleUpdateMovie(e)}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Skill name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    // value={formEditData.title}
                    // onChange={(e) => {
                    //   setFormEditData((prevState) => ({
                    //     ...prevState,
                    //     title: e.target.value,
                    //   }));
                    // }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FormSkill;
