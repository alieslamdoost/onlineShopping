import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/productsActions";

function AddProducts(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [catagory, setCatagory] = useState("");
  const [gender, setGender] = useState("");
  const [codeNumber, setCodeNumber] = useState("");
  const [price, setPrice] = useState("");
  const [exist, setExist] = useState("");
  const [src, setSrc] = useState([]);
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <div>
      <Button
        variant="warning"
        onClick={() => {
          setShow(true);
          handleAdd({
            name: "",
            model: "",
            catagory: "",
            gender: "",
            codeNumber: "",
            price: 0,
            exist: 0,
            src: [],
            description: "",
          });
          setIsEdit(false);
        }}
      >
        افزودن
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        isEdit={isEdit}
        className="my-4"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="px-4">افزودن محصول</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="d-flex justify-content-around align-items-center mb-3"
              controlId="productsName"
            >
              <Form.Group>
                <Form.Label>نام کالا</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Tagheuer Autavia"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>مدل</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Autavia 1001"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-around align-items-center mb-3"
              controlId="category"
            >
              <Form.Group>
                <Form.Label>دسنه بندی</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="ساعت، دستبند"
                  value={catagory}
                  onChange={(e) => setCatagory(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>جنسیت</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="مرد زن"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  autoFocus
                />
              </Form.Group>
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-center align-items-around flex-column mb-3"
              controlId="detils"
            >
              <Form.Group className="d-flex justify-content-around align-items-center">
                <Form.Group>
                  <Form.Label>کد محصول</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="432"
                    value={codeNumber}
                    onChange={(e) => setCodeNumber(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>قیمت</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="18500000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    autoFocus
                  />
                </Form.Group>
              </Form.Group>

              <Form.Label>موجودی</Form.Label>
              <Form.Control
                type="name"
                placeholder="15"
                value={exist}
                onChange={(e) => setExist(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="explantion">
              <Form.Label>توضیحات</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="explantion">
              <Form.Label> بارگزاری تصویر</Form.Label>
              <Form.Control
                type="file"
                value={src}
                onClick={(e) => setSrc(e.target.src)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="warning" onClick={handleClose}>
            افزودن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProducts;
