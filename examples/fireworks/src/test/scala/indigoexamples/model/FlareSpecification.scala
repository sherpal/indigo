package indigoexamples.model

import org.scalacheck._
import org.scalacheck.Prop._
import indigo.shared.dice.Dice
import indigo.shared.time.Millis
import ingidoexamples.model.Flare
import indigoexts.geometry.Vertex
import indigo.shared.datatypes.Radians
import indigo.shared.EqualTo._
import indigo.shared.datatypes.Point

class FlareSpecification extends Properties("Flare") {

  import Generators._

  property("always creates two control points") = Prop.forAll { target: Vertex =>
    Flare.createArcControlVertices(target).length === 2
  }

  property("Zero vertex is always first") = Prop.forAll { target: Vertex =>
    Flare.createArcControlVertices(target).head === Vertex.zero
  }

  property("able to generate a good target vertex based on a start point") = Prop.forAll(radiansGen, diceGen, clampedRadiusGen) { (angle: Radians, dice: Dice, radius: Radius) =>
    val target: Vertex =
      Flare.pickEndPoint(angle, radius.value)(dice)

    val distance: Double =
      Vertex.distanceBetween(Vertex.zero, target)

    val maxDistance: Double =
      Vertex.zero.distanceTo(Vertex(100, 100))

    "target: " + target |: Prop.all(
      s"y: ${target.y} <=  100.0" |: target.y <= 100.0d,
      s"y: ${target.y} >= -100.0" |: target.y >= -100.0d,
      s"x: ${target.x} >= -100.0" |: target.x >= -100.0d,
      s"x: ${target.x} <=  100.0" |: target.x <= 100.0d,
      s"distance: $distance <= maxDistance: $maxDistance" |: distance <= maxDistance
    )
  }

  property("able to 'wobble' a value") = Prop.forAll(diceGen, minMaxDoubles(-10000, 10000)) { (dice: Dice, minMax: (Double, Double)) =>
    val (min, max) = minMax

    val wobbled =
      Flare.wobble(dice, min, max)

    Prop.all(
      wobbled >= min,
      wobbled <= max
    )

  }
}
