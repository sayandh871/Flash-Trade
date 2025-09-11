import { CirclePlus, User, ChartColumn, Section } from "lucide-react";
import { accordianItems } from "./accordianData";

function CreateTicket() {
  return (
    <div className="container">
      <div className="accordion p-5" id="accordionExample">
        {accordianItems.map((Section) => {
          return (
            <div className="accordion-item mb-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-white "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${Section.id}`}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="me-3">
                    <CirclePlus />
                  </span>
                  {Section.title}
                </button>
              </h2>
              <div
                id={Section.id}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    {Section.items.map((item, i) => {
                      return (
                        <li className="fs-5 mb-3">
                          <a
                            href=""
                            className="ms-5"
                            style={{ textDecoration: "none" }}
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateTicket;
