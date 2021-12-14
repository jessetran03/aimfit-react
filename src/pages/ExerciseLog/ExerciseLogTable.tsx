import MaterialTable from 'material-table';
import dayjs from 'dayjs';

interface ILogEntryProps {
  setCount: number;
  repCount: number;
  weightCount: number;
  dateLogged: Date;
}

interface IExerciseLogTableProps {
  data: [ILogEntryProps];
  exerciseName: string;
}

export const ExerciseLogTable = ({
  data,
  exerciseName,
}: IExerciseLogTableProps) => {
  const newData = data.map((entry: ILogEntryProps) =>
    Object.assign({}, entry, { selected: false }),
  );

  const columns = [
    {
      title: 'Set Count',
      field: 'setCount',
    },
    {
      title: 'Rep Count',
      field: 'repCount',
    },
    {
      title: 'Weight Count',
      field: 'weightCount',
    },
    {
      title: 'Date Logged',
      field: 'dateLogged',
      render: (rowData: ILogEntryProps) =>
        dayjs(Number(rowData.dateLogged)).format('MM/DD/YYYY'),
    },
  ];
  return (
    <MaterialTable
      title={`Exercise Log for ${exerciseName}`}
      data={newData}
      columns={columns}
      options={{
        search: false,
        sorting: false,
        headerStyle: {
          zIndex: 8,
        },
      }}
    />
  );
};

export default ExerciseLogTable;
