// import { forwardRef } from 'react';
import MaterialTable from 'material-table';
// import Moment from 'react-moment';

interface ILogEntryProps {
  setCount: number;
  repCount: number;
  weightCount: number;
  dateLogged: Date;
}

interface IExerciseLogTableProps {
  data: [ILogEntryProps];
}

export const ExerciseLogTable = ({ data }: IExerciseLogTableProps) => {
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
    },
  ];
  return (
    <MaterialTable
      title="Exercise Log"
      data={newData}
      columns={columns}
      options={{ search: true }}
      // icons={tableIcons}
    />
  );
};

export default ExerciseLogTable;
