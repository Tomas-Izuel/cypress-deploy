"use client";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Page2 = () => {
  const [elements, setElements] = useState<any>([]);
  const getData = async () => {
    const response = await fetch("/api/test");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((data) => {
      setElements(data);
    });
  }, []);

  return (
    <main className="flex justify-center items-center flex-col gap-10">
      <h1>Page 2</h1>
      {elements.rows ? (
        <ul>
          {elements.rows.map((element: any) => (
            <li key={element.id}>{element.name}</li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Page2;
