import React from "react";
import styles from "./FormPorto.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { DeletePortofolio } from '../../../../redux/actions/portofolio';

const FormPortofolio = (data) => {
	const dispatch = useDispatch();
	const profile_id = Cookies.get('profile_id');
	const token = Cookies.get('token');
	const dataporto = data.data.data.data.dataporto.data;
	console.log(dataporto, 'ini data porto');
	const handledelete = (profile_id, portofolio_id, token, portofolio_name) => {
		if (window.confirm(`${portofolio_name} Akan Dihapus ?`)) {
			dispatch(DeletePortofolio(profile_id, portofolio_id, token));
		}
	};
	return (
		<>
			<div className={styles.cardPortofolioForm}>
				<div className={styles.title}>
					<p>Portofolio</p>
				</div>
				<div className={styles.horizontalLine}>
					<div className={styles.hline}></div>
				</div>
				<div className='col-12 mb-4 '>
					{dataporto?.map((item, index) => {
						return (
							<>
								<div className='mb-3 col-12 d-flex'>
									<div className='col-9'>
										<div className='porto-name'>{item.portofolio_name}</div>
										<div className='porto-repo'>
											<Link href={item.portofolio_repo}>
												<a>{item.portofolio_repo}</a>
											</Link>
										</div>
										<div className='col-12 d-flex pt-2'>
											<button className=' btn btn-outline-success col-4 me-3 '>
												Edit
											</button>
											<button
												className=' btn btn-outline-danger col-4 '
												onClick={() => {
													handledelete(
														profile_id,
														item.portofolio_id,
														token,
														item.portofolio_name
													);
													alert(
														item.profile_id,
														item.portofolio_id,
														item.portofolio_name
													);
												}}
											>
												Delete
											</button>
										</div>
									</div>
									<div className=' col-3 d-flex justify-content-center pt-4'>
										<Image
											className='col-12 '
											// loader={myLoader(item.product_picture)}
											src={`http://localhost:5000/uploads/${item.portofolio_picture}`}
											width={'100'}
											height={'100'}
										/>
									</div>
								</div>
							</>
						);
					})}
				</div>
				<div className={styles.horizontalLine}>
					<div className={styles.hline}></div>
				</div>
				<form>
					<div className={styles.portofolioForm}>
						<label>Nama Aplikasi</label>
						<input type='text' placeholder='Masukan nama aplikasi' />
					</div>
					<div className={styles.portofolioForm}>
						<label>Link Repository</label>
						<input type='text' placeholder='Masukan link repository' />
					</div>
					<div className={styles.portofolioFormImg}>
						<label>Upload gambar</label>
						<input
							type='file'
							id='file'
							className='file-upload'
							data-height='500'
						/>
					</div>
					<div className={styles.btnSavePortofolio}>
						<button>Tambah Portofolio</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormPortofolio;
