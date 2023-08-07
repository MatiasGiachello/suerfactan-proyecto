import axios from "axios";
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";

export const TableAxios = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    await axios.get(endpoint).then((response) => {
      const data = response.data;
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
};

const columns = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "title",
    label: "TITLE",
  },
  {
    name: "price",
    label: "PRICE",
  }

]

    return(
        <MUIDataTable
        title = {"data with axios"}
        data={products}
        columns={columns}
        />
    )

export default TableAxios;
