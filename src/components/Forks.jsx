import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJS } from 'chart.js/auto';
import fetcher from '../utils/fetcher';
import useSWR from 'swr';

function sortObjectByValue(obj) {
  const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const sortedObj = {};
  sortedEntries.forEach((entry) => {
    sortedObj[entry[0]] = entry[1];
  });
  return sortedObj;
}

function Forks({ url }) {
  const { data, error } = useSWR(url, fetcher);
  ChartJS.register(CategoryScale);
  const projectWatchers = {};
  if (error) {
    return <p>{error}</p>;
  }
  if (data) {
    data.forEach((repo) => {
      if (repo.watchers_count < 10) return;

      projectWatchers[repo.name] = repo.forks;
    });
  }
  const sortedObj = sortObjectByValue(projectWatchers);
  const chartData = {
    labels: Object.keys(sortedObj),
    datasets: [
      {
        data: Object.values(sortedObj),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
          '#20B2AA',
          '#FFD700',
          '#9ACD32',
          '#87CEEB',
        ],
      },
    ],
  };
  if (Object.keys(projectWatchers) <= 0) {
    return (
      <div className='bg-base-300 px-4 rounded-md py-5 flex flex-col items-center justify-center'>
        <h1 className=' mb-2 text-2xl font-bold font-lato'>Forks</h1>
        <p>No projects with more than 20 watchers</p>
      </div>
    );
  }
  return (
    <div className='bg-base-300 px-4 rounded-md py-5 flex flex-col items-center justify-center'>
      <h1 className=' mb-2 text-2xl font-bold font-lato'>Forks</h1>
      <div className='max-w-[30rem] h-[20rem] flex items-center justify-center'>
        <Bar data={chartData} height={1200} width={1200} />
      </div>
    </div>
  );
}

export default Forks;
