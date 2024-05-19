import { itemTable } from "@/db/database.config";
import { IItem } from "@/db/types/item";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import HomeLayout from "@/layout/home";
import Head from "next/head";

const Add: NextPageWithLayout = () => {
  const createItem = async (event: any) => {
    event.preventDefault();
    const item: IItem = {
      name: event.target.name.value,
      cat: Number(event.target.cat.value)
    };
    try {
      // Add the new customer!
      const id = await itemTable.add(item);
      console.info(`A new item was created with id ${id}`);
      event.target.reset()

    } catch (error) {
      console.error(`Failed to add ${item}: ${error}`);
    }
  }
  return <div
    className={`
    pt-16 sm:pt-16 
    p-2 sm:p-4 
    flex flex-col items-center
    justify-center`}
  >
    <h1>Create item</h1>
    <form onSubmit={createItem}>
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" /><br /><br />
      <label htmlFor="cat">Cat:</label><br />
      <input type="number" id="cat" name="cat" /><br /><br />
      <button className="btn btn-primary" type="submit">Create</button>
    </form>
  </div>
};

Add.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      <Head>
        <title>{"Add item - " + process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      {page}
    </HomeLayout>
  );
};

export default Add;
