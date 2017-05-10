exports.appBase = class appBase
	constructor: (@layers, @header, @menu) ->
		# Check for the right number of screen / menu items
		if @layers.length != @menu.children.length
			print "Must have the same size of layers and menu"

		# Custom transition
		transitionLeft = (nav, layerA, layerB, overlay) ->
			transition =
				layerA:
					show:
						x: 0
						opacity: 1
					hide:
						x: -100
						opacity: 0
						options:
							time: 0.1
				layerB:
					show:
						x: 0
						opacity: 1
						options:
							time: 0.3
					hide:
						x: 100
						opacity: 0

		transitionRight = (nav, layerA, layerB, overlay) ->
			transition =
				layerA:
					show:
						x: 0
						opacity: 1
					hide:
						x: 100
						opacity: 0
						options:
							time: 0.1
				layerB:
					show:
						x: 0
						opacity: 1
						options:
							time: 0.3
					hide:
						x: -100
						opacity: 0

		# Create FlowComponent
		flow = new FlowComponent
			backgroundColor: "#ffffff"
		flow.header = @header
		flow.footer = @menu
		flow.showNext(@layers[0])


		# Create Menu
		menuIndex = 0
		menuPrevious = 1
		for name, layer of @menu.children
			layer.mIndex = menuIndex
			layer.saturate = 0
			layer.states.on =
				saturate: 100
				animationOptions:
					time: 0.7
			layer.onTap ->
				switchMenu(this.mIndex)
			menuIndex++

		switchMenu = (i) =>
			if(i != menuPrevious)
				@menu.children[menuPrevious].stateCycle("default")
				@menu.children[i].stateCycle()
				if i > menuPrevious
					flow.transition(@layers[i], transitionLeft)
				else
					flow.transition(@layers[i], transitionRight)
				menuPrevious = i

		switchMenu(0)
