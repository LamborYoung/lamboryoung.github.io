window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameScene":"resource/game/GameScene.exml","BtnAbout":"resource/game/BtnAbout.exml","IconItemSkin":"resource/game/IconItemSkin.exml","IconGroupSkin":"resource/game/IconGroupSkin.exml","HeroSceneSkin":"resource/game/HeroSceneSkin.exml","PlayerSceneSkin":"resource/game/PlayerSceneSkin.exml","HeroItemSkin":"resource/game/HeroItemSkin.exml","GoodsItemSkin":"resource/game/GoodsItemSkin.exml","GoodsSceneSkin":"resource/game/GoodsSceneSkin.exml","AboutSceneSkin":"resource/game/AboutSceneSkin.exml","IconSkin":"resource/game/IconSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game/AboutSceneSkin.exml'] = window.AboutSceneSkin = (function (_super) {
	__extends(AboutSceneSkin, _super);
	var AboutSceneSkin$Skin1 = 	(function (_super) {
		__extends(AboutSceneSkin$Skin1, _super);
		function AboutSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","close_png"),
						new eui.SetProperty("_Image1","percentWidth",95),
						new eui.SetProperty("_Image1","percentHeight",95)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AboutSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "close_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AboutSceneSkin$Skin1;
	})(eui.Skin);

	function AboutSceneSkin() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.close_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
	}
	var _proto = AboutSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "about-bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "about_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.x = 394;
		t.y = 212;
		t.skinName = AboutSceneSkin$Skin1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "开发商：白鹭时代";
		t.x = 227;
		t.y = 310;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "版本号：1.0";
		t.x = 227;
		t.y = 343;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 20;
		t.text = "使用Egret引擎开发";
		t.x = 227;
		t.y = 380;
		return t;
	};
	return AboutSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game/EquippedItemSkin.exml'] = window.EquippedItemSkin = (function (_super) {
	__extends(EquippedItemSkin, _super);
	function EquippedItemSkin() {
		_super.call(this);
		this.skinParts = ["equippedImg","nameLabel"];
		
		this.height = 130;
		this.width = 87;
		this.elementsContent = [this._Image1_i(),this.equippedImg_i(),this.nameLabel_i()];
	}
	var _proto = EquippedItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "skillItemFrame_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.equippedImg_i = function () {
		var t = new eui.Image();
		this.equippedImg = t;
		t.source = "skillIcon01_png";
		t.x = 11;
		t.y = 8.5;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "旋龙";
		t.y = 88;
		return t;
	};
	return EquippedItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/IconItemSkin.exml'] = window.IconItemSkin = (function (_super) {
	__extends(IconItemSkin, _super);
	function IconItemSkin() {
		_super.call(this);
		this.skinParts = ["iconContent"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.iconContent_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("iconContent","left",0),
					new eui.SetProperty("iconContent","right",0),
					new eui.SetProperty("iconContent","top",0),
					new eui.SetProperty("iconContent","bottom",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
		];
	}
	var _proto = IconItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "mbtn_Bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "mbtn_BgFc_png";
		t.top = 0;
		return t;
	};
	_proto.iconContent_i = function () {
		var t = new eui.Image();
		this.iconContent = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "mbtnAbout_png";
		t.top = 0;
		return t;
	};
	return IconItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/IconGroupSkin.exml'] = window.IconGroupSkin = (function (_super) {
	__extends(IconGroupSkin, _super);
	function IconGroupSkin() {
		_super.call(this);
		this.skinParts = ["playerIcon","heroIcon","goodsIcon","aboutIcon","iconGroup"];
		
		this.height = 83;
		this.width = 455;
		this.elementsContent = [this.iconGroup_i()];
	}
	var _proto = IconGroupSkin.prototype;

	_proto.iconGroup_i = function () {
		var t = new eui.Group();
		this.iconGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.playerIcon_i(),this.heroIcon_i(),this.goodsIcon_i(),this.aboutIcon_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto.playerIcon_i = function () {
		var t = new IconItem();
		this.playerIcon = t;
		t.skinName = "IconItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.heroIcon_i = function () {
		var t = new IconItem();
		this.heroIcon = t;
		t.skinName = "IconItemSkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.goodsIcon_i = function () {
		var t = new IconItem();
		this.goodsIcon = t;
		t.skinName = "IconItemSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.aboutIcon_i = function () {
		var t = new IconItem();
		this.aboutIcon = t;
		t.skinName = "IconItemSkin";
		t.x = 30;
		t.y = 30;
		return t;
	};
	return IconGroupSkin;
})(eui.Skin);generateEUI.paths['resource/game/GameScene.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["sceneGroup","myIconGroup","selectHero"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.sceneGroup_i(),this.myIconGroup_i(),this.selectHero_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "homeBg_jpg";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sceneGroup_i = function () {
		var t = new eui.Group();
		this.sceneGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.myIconGroup_i = function () {
		var t = new IconGroup();
		this.myIconGroup = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.skinName = "IconGroupSkin";
		t.width = 20;
		t.y = 746;
		return t;
	};
	_proto.selectHero_i = function () {
		var t = new eui.Label();
		this.selectHero = t;
		t.background = true;
		t.backgroundColor = 0x2d2727;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.width = 400;
		t.y = 553;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game/GoodsItemSkin.exml'] = window.GoodsItemSkin = (function (_super) {
	__extends(GoodsItemSkin, _super);
	function GoodsItemSkin() {
		_super.call(this);
		this.skinParts = ["goodsImg","goodsName","goodsIntroduce"];
		
		this.elementsContent = [this._Image1_i(),this.goodsImg_i(),this.goodsName_i(),this.goodsIntroduce_i()];
	}
	var _proto = GoodsItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsImg_i = function () {
		var t = new eui.Image();
		this.goodsImg = t;
		t.source = "goods01_png";
		t.x = 33;
		t.y = 16.5;
		return t;
	};
	_proto.goodsName_i = function () {
		var t = new eui.Label();
		this.goodsName = t;
		t.size = 20;
		t.text = "Label";
		t.x = 186.5;
		t.y = 24;
		return t;
	};
	_proto.goodsIntroduce_i = function () {
		var t = new eui.Label();
		this.goodsIntroduce = t;
		t.size = 20;
		t.text = "Label";
		t.x = 122.5;
		t.y = 62.5;
		return t;
	};
	return GoodsItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/GoodsSceneSkin.exml'] = window.GoodsSceneSkin = (function (_super) {
	__extends(GoodsSceneSkin, _super);
	var GoodsSceneSkin$Skin2 = 	(function (_super) {
		__extends(GoodsSceneSkin$Skin2, _super);
		function GoodsSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnReturn_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GoodsSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GoodsSceneSkin$Skin2;
	})(eui.Skin);

	function GoodsSceneSkin() {
		_super.call(this);
		this.skinParts = ["goodsList","goodsScroller","close"];
		
		this.elementsContent = [this._Image1_i(),this.goodsScroller_i(),this.close_i()];
	}
	var _proto = GoodsSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "commonBg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.goodsScroller_i = function () {
		var t = new eui.Scroller();
		this.goodsScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 493;
		t.width = 444;
		t.x = 17;
		t.y = 189;
		t.viewport = this.goodsList_i();
		return t;
	};
	_proto.goodsList_i = function () {
		var t = new eui.List();
		this.goodsList = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.x = 18;
		t.y = 128;
		t.skinName = GoodsSceneSkin$Skin2;
		return t;
	};
	return GoodsSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game/HeroItemSkin.exml'] = window.HeroItemSkin = (function (_super) {
	__extends(HeroItemSkin, _super);
	var HeroItemSkin$Skin3 = 	(function (_super) {
		__extends(HeroItemSkin$Skin3, _super);
		function HeroItemSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroItemSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "checkNo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroItemSkin$Skin3;
	})(eui.Skin);

	function HeroItemSkin() {
		_super.call(this);
		this.skinParts = ["HeroHead","HeroName","HeroEvaluate","isSelect"];
		
		this.elementsContent = [this._Image1_i(),this.HeroHead_i(),this.HeroName_i(),this.HeroEvaluate_i(),this.isSelect_i()];
	}
	var _proto = HeroItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.HeroHead_i = function () {
		var t = new eui.Image();
		this.HeroHead = t;
		t.source = "heros01_png";
		t.x = 34;
		t.y = 16;
		return t;
	};
	_proto.HeroName_i = function () {
		var t = new eui.Label();
		this.HeroName = t;
		t.size = 20;
		t.text = "Label";
		t.x = 186.5;
		t.y = 23.5;
		return t;
	};
	_proto.HeroEvaluate_i = function () {
		var t = new eui.Label();
		this.HeroEvaluate = t;
		t.size = 20;
		t.text = "Label";
		t.x = 125;
		t.y = 63;
		return t;
	};
	_proto.isSelect_i = function () {
		var t = new eui.CheckBox();
		this.isSelect = t;
		t.label = "";
		t.x = 388;
		t.y = 29;
		t.skinName = HeroItemSkin$Skin3;
		return t;
	};
	return HeroItemSkin;
})(eui.Skin);generateEUI.paths['resource/game/HeroSceneSkin.exml'] = window.HeroSceneSkin = (function (_super) {
	__extends(HeroSceneSkin, _super);
	var HeroSceneSkin$Skin4 = 	(function (_super) {
		__extends(HeroSceneSkin$Skin4, _super);
		function HeroSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnReturn_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroSceneSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroSceneSkin$Skin4;
	})(eui.Skin);

	var HeroSceneSkin$Skin5 = 	(function (_super) {
		__extends(HeroSceneSkin$Skin5, _super);
		function HeroSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnOK_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btnOK_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroSceneSkin$Skin5;
	})(eui.Skin);

	function HeroSceneSkin() {
		_super.call(this);
		this.skinParts = ["close","sure","heroSceneList","heroSceneScroller"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.close_i(),this.sure_i(),this.heroSceneScroller_i()];
	}
	var _proto = HeroSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 1;
		t.left = 0;
		t.right = 0;
		t.source = "commonBg_jpg";
		t.top = -1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "herosTitle_png";
		t.y = 135;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.x = 17;
		t.y = 129.5;
		t.skinName = HeroSceneSkin$Skin4;
		return t;
	};
	_proto.sure_i = function () {
		var t = new eui.Button();
		this.sure = t;
		t.label = "";
		t.x = 387;
		t.y = 129.5;
		t.skinName = HeroSceneSkin$Skin5;
		return t;
	};
	_proto.heroSceneScroller_i = function () {
		var t = new eui.Scroller();
		this.heroSceneScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 498;
		t.horizontalCenter = 0.5;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 431;
		t.y = 185;
		t.viewport = this.heroSceneList_i();
		return t;
	};
	_proto.heroSceneList_i = function () {
		var t = new eui.List();
		this.heroSceneList = t;
		t.itemRendererSkinName = HeroItemSkin;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return HeroSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game/IconSkin.exml'] = window.IconSkin = (function (_super) {
	__extends(IconSkin, _super);
	function IconSkin() {
		_super.call(this);
		this.skinParts = ["iconImg"];
		
		this.currentState = "up";
		this.elementsContent = [this.iconImg_i()];
		this.states = [
			new eui.State ("dowm",
				[
					new eui.SetProperty("iconImg","scaleX",0.9),
					new eui.SetProperty("iconImg","scaleY",0.9),
					new eui.SetProperty("iconImg","anchorOffsetX",42.5),
					new eui.SetProperty("iconImg","anchorOffsetY",20.5)
				])
			,
			new eui.State ("up",
				[
				])
		];
	}
	var _proto = IconSkin.prototype;

	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.horizontalCenter = 0;
		t.source = "btnReturn_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return IconSkin;
})(eui.Skin);generateEUI.paths['resource/game/PlayerSceneSkin.exml'] = window.PlayerSceneSkin = (function (_super) {
	__extends(PlayerSceneSkin, _super);
	var PlayerSceneSkin$Skin6 = 	(function (_super) {
		__extends(PlayerSceneSkin$Skin6, _super);
		function PlayerSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnReturn_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayerSceneSkin$Skin6;
	})(eui.Skin);

	function PlayerSceneSkin() {
		_super.call(this);
		this.skinParts = ["equippedList","equippedScroller","close","equip","strength"];
		
		this.elementsContent = [this._Image1_i(),this.equippedScroller_i(),this._Image2_i(),this.close_i(),this._Image3_i(),this.equip_i(),this.strength_i()];
	}
	var _proto = PlayerSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "commonBg_jpg";
		t.top = 0;
		t.width = 483;
		return t;
	};
	_proto.equippedScroller_i = function () {
		var t = new eui.Scroller();
		this.equippedScroller = t;
		t.height = 123;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 391;
		t.y = 502;
		t.viewport = this.equippedList_i();
		return t;
	};
	_proto.equippedList_i = function () {
		var t = new eui.List();
		this.equippedList = t;
		t.y = -22;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "profileTitle_png";
		t.y = 135;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.x = 27;
		t.y = 128.5;
		t.skinName = PlayerSceneSkin$Skin6;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "profileContent_png";
		t.y = 196;
		return t;
	};
	_proto.equip_i = function () {
		var t = new Icon();
		this.equip = t;
		t.skinName = "IconSkin";
		t.x = 91;
		t.y = 649;
		return t;
	};
	_proto.strength_i = function () {
		var t = new Icon();
		this.strength = t;
		t.skinName = "IconSkin";
		t.x = 307;
		t.y = 649;
		return t;
	};
	return PlayerSceneSkin;
})(eui.Skin);