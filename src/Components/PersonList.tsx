type dataListProps = {
  dataList: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: dataListProps) => {
  return (
    <div>
      {props.dataList.map((name, index) => {
        return (
          <h1 key={index}>
            {name.first} {name.last}
          </h1>
        );
      })}
    </div>
  );
};
