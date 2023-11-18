import Image from 'next/image'
const member = [
    {
        name: 'Phạm Trọng Đạt',
        avatar: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=9vRSzN9KwOgAX_4GTVv&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDE34jds599Fs_lod0UVMzJdvcat-31_r676Q-tmd-MkA&oe=657F7C78',
        mssv: '46.01.104.024',
    },
    {
        name: 'Trịnh Anh Khoa',
        avatar: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/347831704_3434144406874326_2018469386556126360_n.jpg?stp=cp6_dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6rYqxLI6RIAAX-VV_bN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfCdZAvl2ofR0ZyGG23eNq9rlPgoqQQ5EsQOEdgiF-U8Tw&oe=655D08BA',
        mssv: '43.01.104.080',
    },
    {
        name: 'Nguyễn Cao Tuấn Khanh',
        avatar: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/368379174_1711886425925184_991668200653744519_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V04E9hvXskwAX9YRM23&_nc_oc=AQlkoAMKj_rpfgs7s-Q_6N_qOsaPTq1qJa0m-BoQx3W7htmeQNOtphhQDbjsSGqsI1PNAdb_k5W8OgJWRwF6a4tP&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBcEAUV1EPex-eDqgNpINiICKd-gei3b84JIObjuu0npQ&oe=655DD026',
        mssv: '46.01.104.079',
    },
    {
        name: 'Nguyễn Quốc An',
        avatar: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-1/139437052_801021070484467_6579343261364892799_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=052aaeCFV98AX-YJvY0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfDsz5JjGD7Q_LK7WeVzufi5VglHRmDPZv-IA1JeEs4QSA&oe=657F9468',
        mssv: '46.01.104.001',
    },
    {
        name: 'Phạm Đức Qúy',
        avatar: 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/276992263_1012555786351791_4350960664987239400_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c-eyOKQtUHAAX-Tcw0H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDn9Yi_3Hfb8A1qzj0rgwjhaA3j-n7L_LpMu852Yj_mcw&oe=655D1BF6',
        mssv: '46.01.104.149',
    },
]
export default function Home() {
    return (
        <div className='flex flex-col'>
            <h1 className='font-medium text-[50px] text-center'>Nhóm ABC</h1>
            <div className=' p-4 flex flex-col gap-2'>
                <h2 className='text-[30px]'>Thành Viên Nhóm</h2>
                <div className='grid grid-cols-5 gap-4'>
                    {member.map((data) => (
                        <div class='max-w-sm rounded overflow-hidden shadow-lg bg-white py-4'>
                            <img
                                class='w-[250px] aspect-square object-cover m-auto '
                                src={data.avatar}
                                alt='Avatar Thành Viên'
                            />
                            <div class='px-6 py-4'>
                                <div class='font-bold text-xl mb-2'>
                                    {data.name}
                                </div>
                                <p class='text-gray-700 text-base'>
                                    {` MSSV: ${data.mssv}`}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
