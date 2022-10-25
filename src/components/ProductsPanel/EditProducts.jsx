import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { selectedEditedProduct } from "../../redux/actions/productsActions";

function EditProducts({ product }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = (product) => {
    dispatch(selectedEditedProduct(product));
  };
  const [editProduct, setEditProduct] = useState({
    name: product.name,
    model: product.model,
    catagory: product.catagory,
    gender: product.gender,
    codeNumber: product.codeNumber,
    price: product.price,
    exist: product.exist,
    src: product.src,
    description: product.description,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleEdit = async (id) => {
  //   let dataEdit = HTTP.patch(`/products/${id}`);
  // };

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        ویرایش
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="px-4">ویرایش</Modal.Title>
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
                  value={product.name ? product.name : ""}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>مدل</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Autavia 1001"
                  value={product.model ? product.name : ""}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, model: e.target.value })
                  }
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
                  value={product.catagory ? product.catagory : ""}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      catagory: e.target.value,
                    })
                  }
                  autoFocus
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>جنسیت</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="مرد زن"
                  value={product.gender ? product.gender : ""}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      gender: e.target.value,
                    })
                  }
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
                    value={product.codeNumber ? product.codeNumber : ""}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        codeNumber: e.target.value,
                      })
                    }
                    autoFocus
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>قیمت</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="18500000"
                    value={product.price ? product.price : ""}
                    onChange={(e) =>
                      setEditProduct({
                        ...editProduct,
                        price: e.target.value,
                      })
                    }
                    autoFocus
                  />
                </Form.Group>
              </Form.Group>

              <Form.Label>موجودی</Form.Label>
              <Form.Control
                type="name"
                placeholder="15"
                value={product.exist ? product.exist : ""}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    exist: e.target.value,
                  })
                }
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="explantion">
              <Form.Label>توضیحات</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={product.description ? product.description : ""}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="explantion">
              <Form.Label> بارگزاری تصویر</Form.Label>
              <Form.Control type="file" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="warning">اصلاح</Button>
        </Modal.Footer>
      </Modal>
      {console.log(editProduct)}
    </div>
  );
}

export default EditProducts;
