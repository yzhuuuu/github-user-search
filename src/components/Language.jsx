import { CategoryScale } from 'chart.js';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import fetcher from '../utils/fetcher';
import useSWR from 'swr';

function Language({ url }) {
  const { data, error } = useSWR(url, fetcher);
  ChartJS.register(CategoryScale);

  if (error) {
    return <p>{error}</p>;
  }
  const languageObj = {};
  if (data) {
    data.forEach((repo) => {
      const language = repo.language || 'Unknown';
      languageObj[language] = (languageObj[language] || 0) + 1;
    });
  }
  const chartData = {
    labels: Object.keys(languageObj),
    datasets: [
      {
        data: Object.values(languageObj),
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
        ], // Add more colors if needed
      },
    ],
  };
  return (
    <div className='bg-base-300 px-4 rounded-md py-5 flex flex-col items-center justify-center'>
      <h1 className=' mb-2 text-2xl font-bold font-lato'>Language</h1>
      <div className='max-w-[30rem] h-[20rem] flex items-center justify-center'>
        <Pie data={chartData} height={1200} width={1200} />
      </div>
    </div>
  );
}

export default Language;
