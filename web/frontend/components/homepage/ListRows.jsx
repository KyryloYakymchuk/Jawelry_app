import React from "react";
import { Badge, Button, IndexTable, Thumbnail } from "@shopify/polaris";
import { useDispatch } from 'react-redux'
import { selectItems } from "../../redux/actions/product";
import { useNavigate } from "react-router-dom";

function ListRows({
  productsData,
  // selectedResources
}) {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSelectProduct  = (product) => {
    dispatch(selectItems(product))
    navigate(`/configurepage`, { replace: true, reloadDocument: true });

  }
  return productsData?.map((product, index) => (
    <IndexTable.Row
      id={product.id}
      key={product.id}
      // selected={selectedResources.includes(product.id)}
      position={index}
    >
      <IndexTable.Cell>
        <Thumbnail
          source={
            product.image?.src ||
            "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
          }
          alt={product.image?.alt || "No image"}
        />
      </IndexTable.Cell>
      <IndexTable.Cell>{product.title}</IndexTable.Cell>
      <IndexTable.Cell>
        <Badge>No Configuration</Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Button onClick={() => handleSelectProduct(product)}>Configure</Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));
}

export default ListRows;