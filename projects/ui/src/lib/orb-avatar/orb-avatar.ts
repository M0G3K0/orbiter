import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'rounded' | 'square';

/**
 * orb-avatar (Molecule): 画像を表示するためのアバターコンポーネント
 *
 * ユーザープロフィール画像、サムネイル、アイコン的な画像表示に使用。
 * 複数のサイズ・形状バリアントをサポートし、ピクセルアート表示にも対応。
 *
 * 背景色やシャドウなどの装飾は、使用箇所で親要素を使って対応してください。
 * 将来的に orb-surface / orb-paper コンポーネントを導入予定。
 *
 * @example
 * ```html
 * <orb-avatar
 *   src="/images/profile.png"
 *   alt="ユーザー名"
 *   size="lg"
 *   shape="rounded"
 *   [pixelated]="true">
 * </orb-avatar>
 * ```
 *
 * @see https://primer.style/components/avatar - GitHub Primer Avatar
 */
@Component({
	selector: 'orb-avatar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './orb-avatar.html',
	styleUrls: ['./orb-avatar.scss'],
})
export class AvatarComponent {
	/** 画像のURL（必須） */
	@Input({ required: true }) src!: string;

	/** 代替テキスト（アクセシビリティ必須） */
	@Input({ required: true }) alt!: string;

	/** サイズバリアント */
	@Input() size: AvatarSize = 'md';

	/** 形状バリアント */
	@Input() shape: AvatarShape = 'circle';

	/** ピクセルアート用のレンダリング（レトロゲーム画像など） */
	@Input() pixelated = false;

	/** コンテナ要素のクラス一覧 */
	get containerClasses(): string[] {
		return [
			'orb-avatar',
			`orb-avatar--${this.size}`,
			`orb-avatar--${this.shape}`,
		];
	}

	/** 画像要素のクラス一覧 */
	get imageClasses(): string[] {
		const classes = ['orb-avatar__image'];
		if (this.pixelated) {
			classes.push('orb-avatar__image--pixelated');
		}
		return classes;
	}
}
