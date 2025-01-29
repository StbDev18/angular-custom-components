import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { IGestionProcuradores, IProcurador } from './procuradores.interface';

@Component({
  selector: 'app-library-ng-select-example',
  imports: [NgSelectModule],
  templateUrl: './library-ng-select-example.component.html',
  styleUrl: './library-ng-select-example.component.scss'
})
export class LibraryNgSelectExampleComponent {

  public photos: any[] = [];
	public photosBuffer: any[] = [];
	public bufferSize = 10;
	public numberOfItemsFromEndBeforeFetchingMore = 10;
	public loading = false;
	public procuradores: IProcurador[] = [];
	public procuradoresBuffer: IProcurador[] = [];

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe((photos) => {
			this.photos = photos;
			this.photosBuffer = this.photos.slice(0, this.bufferSize);
			console.log(this.photosBuffer);
			
		});

		this.http.get<IGestionProcuradores>('https://api-sirf.sinapsis.global/api/SiafiUsuario/gestion-procuradores')
		.subscribe((procuradores) => {
			this.procuradores = procuradores.objeto;
			this.procuradoresBuffer = this.procuradores.slice(0, this.bufferSize);
		});
	}

	onScrollToEnd() {
		this.fetchMore();
	}

	onScroll({ end }: any) {
		if (this.loading || this.photos.length <= this.photosBuffer.length) {
			return;
		}

		if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.photosBuffer.length) {
			this.fetchMore();
		}
	}

	private fetchMore() {
		const len = this.photosBuffer.length;
		const more = this.photos.slice(len, this.bufferSize + len);
		this.loading = true;
		// using timeout here to simulate backend API delay
		setTimeout(() => {
			this.loading = false;
			this.photosBuffer = this.photosBuffer.concat(more);
		}, 200);
	}

}
